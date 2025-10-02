"use client";
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import styles from './Simulator.module.scss';

const POINTS = ['A','B','C','D','E','F'];
const SEGMENTS = [['A','B'],['B','C'],['C','D'],['D','E'],['E','F']];
const STORAGE_KEY = 'limfedem_calc_brat_AF_v1';

const safeNum = (v: unknown): number | null => {
  const n = parseFloat(String(v ?? ''));
  return Number.isFinite(n) ? n : null;
};

const safeFmt = (v: unknown, digits = 1): string => (Number.isFinite(v as number) ? (v as number).toFixed(digits) : '0.0');

const Simulator: React.FC = () => {
  const [h, setH] = useState<number | string>(7);
  const [right, setRight] = useState<Record<string,string>>(() => ({}));
  const [left, setLeft] = useState<Record<string,string>>(() => ({}));

  useEffect(() => {
    // load saved
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.h != null) setH(data.h);
      POINTS.forEach(p => {
        setRight(prev => ({ ...prev, [p]: data.right?.[p] ?? '' }));
        setLeft(prev => ({ ...prev, [p]: data.left?.[p] ?? '' }));
      });
    } catch {}
  }, []);

  useEffect(() => {
    // Save on changes (debounced lightly)
    const t = setTimeout(() => {
      const data = { h, right, left };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
    }, 180);
    return () => clearTimeout(t);
  }, [h, right, left]);

  const num = useCallback((v: unknown): number | null => safeNum(v), []);
  const fmt = useCallback((v: unknown, digits = 1) => safeFmt(v, digits), []);

  type Row = { seg: string; Cr: number | null; cr: number | null; Vr: number; Cl: number | null; cl: number | null; Vl: number };

  const computeResults = useMemo(() => {
    const hh = num(h) ?? 7;
    let totalR = 0, totalL = 0;
    const rows: Row[] = [];
    SEGMENTS.forEach(([p1,p2]) => {
      const Cr = num(right[p1]);
      const cr = num(right[p2]);
      const Cl = num(left[p1]);
      const cl = num(left[p2]);
      let Vr = 0, Vl = 0;
      if (Cr !== null && cr !== null) { Vr = hh * (Cr*Cr + Cr*cr + cr*cr) / (12 * Math.PI); totalR += Vr; }
      if (Cl !== null && cl !== null) { Vl = hh * (Cl*Cl + Cl*cl + cl*cl) / (12 * Math.PI); totalL += Vl; }
      rows.push({ seg: `${p1}–${p2}`, Cr, cr, Vr, Cl, cl, Vl });
    });
    const diffAbs = Math.abs(totalR - totalL);
    const base = Math.max(totalR, totalL, 0);
    const diffPct = base > 0 ? (diffAbs / base * 100) : 0;
    return { rows, totalR, totalL, diffAbs, diffPct };
  }, [h, right, left, num]);

  const onChangePoint = (side: 'r' | 'l', p: string, v: string) => {
    if (side === 'r') setRight(prev => ({ ...prev, [p]: v }));
    else setLeft(prev => ({ ...prev, [p]: v }));
  };

  const saveManual = () => {
    const old = (document.getElementById('btn-save') as HTMLButtonElement | null)?.textContent;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ h, right, left }));
      if (old) {
        const btn = document.getElementById('btn-save');
        if (btn) { btn.textContent = 'Salvat ✔'; setTimeout(() => { if (btn) btn.textContent = old; }, 1200); }
      }
    } catch {}
  };

  const resetAll = () => {
    setH(7);
    POINTS.forEach(p => { setRight(prev => ({ ...prev, [p]: '' })); setLeft(prev => ({ ...prev, [p]: '' })); });
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ h: 7, right: {}, left: {} })); } catch {}
  };

  const exportCSV = () => {
    const hhNum = num(h) ?? 7;
    let csv = '"Calculator volum brat – A–F"\n';
    csv += `"h (cm)",${hhNum}\n\n`;
    csv += '"Punct","Dreapta (cm)","Stanga (cm)"\n';
    POINTS.forEach(p => { csv += `"${p}","${right[p]||''}","${left[p]||''}"\n`; });
    csv += '\n"Segment","C dreapta (cm)","c dreapta (cm)","Volum segment dreapta (mL)","C stanga (cm)","c stanga (cm)","Volum segment stanga (mL)"\n';
    let totalR = 0, totalL = 0;
    SEGMENTS.forEach(([p1,p2]) => {
      const Cr = num(right[p1]); const cr = num(right[p2]); const Cl = num(left[p1]); const cl = num(left[p2]);
      let Vr = 0, Vl = 0;
      if (Cr !== null && cr !== null) { Vr = (hhNum) * (Cr*Cr + Cr*cr + cr*cr) / (12 * Math.PI); totalR += Vr; }
      if (Cl !== null && cl !== null) { Vl = (hhNum) * (Cl*Cl + Cl*cl + cl*cl) / (12 * Math.PI); totalL += Vl; }
      csv += `"${p1}-${p2}","${Cr !== null ? Cr : ''}","${cr !== null ? cr : ''}","${Vr.toFixed(1)}","${Cl !== null ? Cl : ''}","${cl !== null ? cl : ''}","${Vl.toFixed(1)}"\n`;
    });
    const diffAbs = Math.abs(totalR - totalL);
    const base = Math.max(totalR, totalL, 0);
    const diffPct = base > 0 ? (diffAbs / base * 100) : 0;
    csv += `\n"Total dreapta (mL)","${totalR.toFixed(1)}"\n`;
    csv += `"Total stanga (mL)","${totalL.toFixed(1)}"\n`;
    csv += `"Diferenta absoluta (mL)","${diffAbs.toFixed(1)}"\n`;
    csv += `"Diferenta relativa (%)","${diffPct.toFixed(1)}"\n`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'calculator_volum_brat_AF.csv'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const rows = computeResults.rows;

  const pillClass = useMemo(() => {
    const { diffAbs, diffPct } = computeResults;
    if (diffAbs >= 200 || diffPct >= 10) return 'danger';
    if ((diffAbs >= 100 && diffAbs < 200) || (diffPct >= 5 && diffPct < 10)) return 'warn';
    return 'ok';
  }, [computeResults]);

  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <header>
          <p className={styles.headerDesc}>Introduceți circumferințele (cm) la <strong>A, B, C, D, E, F</strong> pentru ambele brațe. Rezultatele se actualizează automat. Prietenos cu telefonul 📱</p>
        </header>

        <section className={`${styles.grid} ${styles.grid2}`} style={{ marginTop: 18 }}>
          <div className={styles.card}>
            <div className={styles.controls} style={{ marginBottom: 10, gap: 12 }}>
              <label htmlFor="h">Distanța între marcaje h (cm):</label>
              <input id="h" type="number" step="0.1" inputMode="decimal" value={String(h)} onChange={e => setH(e.target.value)} className={styles.num} style={{ maxWidth: 120 }} aria-label="Distanța dintre puncte în centimetri" />
              <span className={styles.hint}>Implicit 7 cm (A→B→C→D→E→F la fiecare 7 cm).</span>
            </div>

            <div className={styles.grid} style={{ gap: 18 }}>
              <div className={styles.tableWrap}>
                <table className={styles.table} aria-label="Tabel măsurători circumferințe">
                  <thead>
                    <tr>
                      <th>Punct</th>
                      <th>Dreapta (cm)</th>
                      <th>Stânga (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POINTS.map(p => (
                      <tr key={p}>
                        <td><strong>{p}</strong></td>
                        <td><input type="number" step="0.1" inputMode="decimal" aria-label={`Dreapta ${p}`} value={right[p] ?? ''} onChange={e => onChangePoint('r', p, e.target.value)} className={styles.num} /></td>
                        <td><input type="number" step="0.1" inputMode="decimal" aria-label={`Stânga ${p}`} value={left[p] ?? ''} onChange={e => onChangePoint('l', p, e.target.value)} className={styles.num} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

                <div className={styles.controls} style={{ gap: 10 }}>
                <button id="btn-save" className={styles.btn} onClick={saveManual}>Salvează datele</button>
                <button className={`${styles.btn} ${styles.ghost || ''}`} onClick={() => {
                  try { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return; const data = JSON.parse(raw); if (data.h != null) setH(data.h); POINTS.forEach(p => { setRight(prev => ({ ...prev, [p]: data.right?.[p] ?? '' })); setLeft(prev => ({ ...prev, [p]: data.left?.[p] ?? '' })); }); } catch {}
                }}>Încarcă salvarea</button>
                <button className={`${styles.btn} ${styles.secondary || ''}`} onClick={resetAll}>Resetează</button>
                <button className={`${styles.btn} ${styles.ghost || ''}`} onClick={exportCSV}>Exportă CSV</button>
              </div>

              <p className={styles.note}>Sfat: măsoară la aceeași oră a zilei, fără a strânge centimetrul. Scoate bijuteriile. Măsurătorile sunt în cm.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.tableWrap}>
              <table className={styles.table} aria-label="Rezultate pe segmente">
                <thead>
                  <tr>
                    <th>Segment</th>
                    <th>C dreapta (cm)</th>
                    <th>c dreapta (cm)</th>
                    <th>Volum segment dreapta (mL)</th>
                    <th>C stânga (cm)</th>
                    <th>c stânga (cm)</th>
                    <th>Volum segment stânga (mL)</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td><strong>{r.seg}</strong></td>
                      <td>{Number.isFinite(r.Cr)?fmt(r.Cr):'–'}</td>
                      <td>{Number.isFinite(r.cr)?fmt(r.cr):'–'}</td>
                      <td>{fmt(r.Vr)}</td>
                      <td>{Number.isFinite(r.Cl)?fmt(r.Cl):'–'}</td>
                      <td>{Number.isFinite(r.cl)?fmt(r.cl):'–'}</td>
                      <td>{fmt(r.Vl)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 18 }}>
          <div className={styles.cards}>
            <div className={styles.metric}>
              <h4>Total dreapta (mL)</h4>
              <div className={styles.value} id="total-right">{fmt(computeResults.totalR)}</div>
            </div>
            <div className={styles.metric}>
              <h4>Total stânga (mL)</h4>
              <div className={styles.value} id="total-left">{fmt(computeResults.totalL)}</div>
            </div>
            <div className={styles.metric}>
              <h4>Diferență absolută (mL)</h4>
              <div className={styles.value} id="diff-abs">{fmt(computeResults.diffAbs)}</div>
            </div>
            <div className={styles.metric}>
              <h4>Diferență relativă (%)</h4>
              <div className={styles.value} id="diff-pct">{fmt(computeResults.diffPct)}%</div>
            </div>
          </div>
          <p style={{ marginTop: 10 }}>
            <span id="flag-pill" className={`${styles.pill} ${styles[pillClass] || ''}`}>Estimare diferență</span>
            <span className={styles.hint}> Repere orientative: o diferență ≥ <strong>200 mL</strong> sau ≥ <strong>10%</strong> poate fi semnificativă clinic și merită discutată cu terapeutul/medicul.</span>
          </p>
        </section>

        <section className={styles.card} style={{ marginTop: 18 }}>
          <h3 style={{ marginTop: 0 }}>Cum măsori (pe scurt)</h3>
          <ol>
            <li>Marchează punctul <strong>A</strong> la încheietură (nivelul oaselor stiloide). Din <strong>7 cm</strong> în <strong>7 cm</strong> proximal: <strong>B</strong>, <strong>C</strong>, <strong>D</strong>, <strong>E</strong>, <strong>F</strong>.</li>
            <li>Ține banda orizontal, lipită de piele, <em>fără a strânge</em>. Măsoară în cm fiecare punct, pe <strong>ambele</strong> brațe.</li>
            <li>Introduce valorile și verifică rezultatele. Volumul total al fiecărui braț este suma segmentelor (A–B, B–C, …, E–F) calculate cu formula:
              <br /><code>V = h · (C² + C·c + c²) / (12 · π)</code>
            </li>
          </ol>
          <p className={styles.note}>Acest instrument este pentru auto-monitorizare. Nu înlocuiește evaluarea clinică. Dacă observi o creștere susținută a volumului sau simptome noi, caută un fizioterapeut specializat în limfedem. Ești mai mult decât cifrele ♥️</p>
        </section>

        <footer className={styles.footer}>
          <small>Versiune integrată, datele rămân în dispozitiv. Poți exporta CSV pentru a le trimite terapeutului.</small>
        </footer>
      </main>
    </div>
  );
}

    export default Simulator;
