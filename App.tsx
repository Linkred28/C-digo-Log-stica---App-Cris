import React, { useEffect } from 'react';

const App: React.FC = () => {

    useEffect(() => {
        const slides = document.querySelectorAll('.slide-content');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.5 });

        slides.forEach(slide => {
            observer.observe(slide);
        });

        return () => {
            slides.forEach(slide => {
                observer.unobserve(slide);
            });
        };
    }, []);

    return (
        <div className="presentation-container">

            {/* Slide 1: Portada */}
            <section id="slide1" className="slide bg-slate-900 text-white justify-center items-center text-center">
                <div className="slide-content">
                    <div className="relative z-10">
                        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                            <span className="text-white">Logística:</span><br />
                            <span className="text-blue-400">operación bajo control</span>
                        </h1>
                    </div>
                </div>
                 <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.6))]"></div>
                <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(90deg,rgba(0,0,0,0.6),#000)]"></div>
            </section>

            {/* Slide 2: Problemas comunes */}
            <section id="slide2" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="slide-title text-5xl md:text-6xl font-bold text-slate-900 mb-12">Los retos en logística más frecuentes:</h2>
                    <div className="slide-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        <div className="problem-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                            <p className="text-slate-800 text-xl font-semibold">Inventarios rotos o sobrecargados.</p>
                        </div>
                        <div className="problem-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                            <p className="text-slate-800 text-xl font-semibold">Rutas de reparto poco eficientes.</p>
                        </div>
                        <div className="problem-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v.958m12 0c-2.278 0-4.271.958-5.75 2.446l-.001.001L10.5 11.25l-2.752-2.753" /></svg>
                            <p className="text-slate-800 text-xl font-semibold">Entregas incompletas o tardías.</p>
                        </div>
                         <div className="problem-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                            <p className="text-slate-800 text-xl font-semibold">Falta de trazabilidad en pedidos.</p>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-slate-300 font-bold text-lg">02</span>
            </section>

            {/* Slide 3: Cómo lo resolvemos (parte 1) */}
            <section id="slide3" className="slide bg-slate-50">
                <div className="slide-content">
                    <h2 className="slide-title text-5xl md:text-6xl font-bold text-slate-900 mb-12">Orden y control en la operación:</h2>
                    <div className="slide-body space-y-12 mt-16 max-w-4xl">
                        <div className="step-item">
                            <span className="step-number">1</span>
                            <div className="step-content">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.5 0A3.75 3.75 0 0118 18.75h-5.25A3.75 3.75 0 019 15m6-6V6.75A3.75 3.75 0 0011.25 3H6.75A3.75 3.75 0 003 6.75v8.25A3.75 3.75 0 006.75 18.75h.5" /></svg>
                                <p className="text-slate-800 text-2xl font-semibold">Rutas y almacenes optimizados.</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <span className="step-number">2</span>
                            <div className="step-content">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                                <p className="text-slate-800 text-2xl font-semibold">Sistema ligero de gestión (WMS).</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <span className="step-number">3</span>
                            <div className="step-content">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                                <p className="text-slate-800 text-2xl font-semibold">Pedidos trazables con alertas.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-slate-300 font-bold text-lg">03</span>
            </section>

            {/* Slide 4: Cómo lo resolvemos (parte 2) */}
            <section id="slide4" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="slide-title text-5xl md:text-6xl font-bold text-slate-900 mb-12">Más soluciones clave:</h2>
                    <div className="slide-body grid md:grid-cols-2 gap-12 items-stretch mt-16">
                        <div className="comparison-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691v4.992h4.992v-4.992m0 0l3.181-3.183a8.25 8.25 0 00-11.667 0L2.985 16.953z" /></svg>
                            <div>
                                <h3 className="font-semibold text-2xl">Reposición inteligente de inventarios.</h3>
                            </div>
                        </div>
                        <div className="comparison-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                            <div>
                                <h3 className="font-semibold text-2xl">Integraciones con e-commerce y ERP.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-slate-300 font-bold text-lg">04</span>
            </section>

            {/* Slide 5: Beneficios */}
            <section id="slide5" className="slide bg-slate-50">
                <div className="slide-content">
                    <h2 className="slide-title text-5xl md:text-6xl font-bold text-slate-900 mb-12">Los beneficios son directos:</h2>
                    <div className="slide-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        <div className="benefit-card">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.153.24c-1.013 0-2.015-.156-3-.44m-12.5 0l2.62 10.726c.122.499.106 1.028-.589 1.202a5.989 5.989 0 01-2.153.24c-1.013 0-2.015-.156-3-.44m6.5-10.43l1.626 6.625" /></svg>
                            <h3 className="font-semibold text-xl">Inventarios balanceados → menos quiebres y sobrestock.</h3>
                        </div>
                        <div className="benefit-card">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <h3 className="font-semibold text-xl">Rutas optimizadas → menor costo por entrega.</h3>
                        </div>
                        <div className="benefit-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M9 12.75h6" /></svg>
                            <h3 className="font-semibold text-xl">Pedidos completos y a tiempo → mejor cumplimiento.</h3>
                        </div>
                        <div className="benefit-card">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /></svg>
                            <h3 className="font-semibold text-xl">Evidencia clara → trazabilidad total por cliente y pedido.</h3>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-slate-300 font-bold text-lg">05</span>
            </section>

            {/* Slide 6: Lo que entregamos */}
            <section id="slide6" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="slide-title text-5xl md:text-6xl font-bold text-slate-900 mb-12">Lo que entregamos:</h2>
                    <div className="slide-body max-w-4xl mx-auto space-y-6 mt-12">
                         <div className="checklist-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <h3 className="font-semibold text-xl">Layout y slotting del almacén.</h3>
                        </div>
                        <div className="checklist-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <h3 className="font-semibold text-xl">App ligera de gestión logística (WMS).</h3>
                        </div>
                        <div className="checklist-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <h3 className="font-semibold text-xl">Tablero logístico con métricas y alertas.</h3>
                        </div>
                        <div className="checklist-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <h3 className="font-semibold text-xl">Políticas de reposición claras.</h3>
                        </div>
                        <div className="checklist-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <h3 className="font-semibold text-xl">Integraciones o reportes automáticos.</h3>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-slate-300 font-bold text-lg">06</span>
            </section>

            {/* Slide 7: KPIs */}
            <section id="slide7" className="slide bg-slate-50">
                <div className="slide-content">
                    <h2 className="slide-title text-5xl md:text-6xl font-bold text-slate-900 mb-12">Indicadores que medimos:</h2>
                    <div className="slide-body">
                         <div className="timeline-container">
                            <div className="timeline-item timeline-left">
                                <div className="timeline-content">
                                    <h3>OTIF</h3>
                                    <p>% entregas completas y a tiempo.</p>
                                </div>
                            </div>
                            <div className="timeline-item timeline-right">
                                <div className="timeline-content">
                                    <h3>Fill rate</h3>
                                    <p>% líneas surtidas.</p>
                                </div>
                            </div>
                            <div className="timeline-item timeline-left">
                                <div className="timeline-content">
                                    <h3>Lead time</h3>
                                    <p>días promedio por entrega.</p>
                                </div>
                            </div>
                            <div className="timeline-item timeline-right">
                                <div className="timeline-content">
                                    <h3>Mermas</h3>
                                    <p>% de pérdidas.</p>
                                </div>
                            </div>
                             <div className="timeline-item timeline-left">
                                <div className="timeline-content">
                                    <h3>Costo por entrega</h3>
                                    <p>Optimización de recursos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-slate-300 font-bold text-lg">07</span>
            </section>

            {/* Slide 8: Herramientas */}
            <section id="slide8" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="slide-title text-5xl md:text-6xl font-bold text-slate-900 mb-6">Herramientas que usamos:</h2>
                    <p className="text-slate-600 text-lg max-w-3xl">Integramos y potenciamos el ecosistema de Microsoft que tu empresa ya conoce para construir soluciones robustas, seguras y escalables.</p>
                    <div className="tool-icon-grid mt-6">
                        <div className="tool-card">
                            <div className="tool-icon-circle">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="power-apps-color"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
                            </div>
                            <span className="font-semibold text-xl">Power Apps</span>
                        </div>
                        <div className="tool-card">
                            <div className="tool-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="power-automate-color"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 11.42m5.877 5.877l.52-1.848a3.375 3.375 0 00-4.773-4.773l-1.848.52M3 14.25l6.548-6.548a3.375 3.375 0 014.773 0L21 14.25" /></svg>
                            </div>
                            <span className="font-semibold text-xl">Power Automate</span>
                        </div>
                        <div className="tool-card">
                            <div className="tool-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="power-bi-color"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 20.25v-4.5A2.25 2.25 0 016 13.5h12a2.25 2.25 0 012.25 2.25v4.5m-8.25-9V3.75h3v1.5m-3 0h3m-3 1.5h3m-3 3h3m-3 4.5h3m-6-4.5h3v1.5m-3-1.5h3" /></svg>
                            </div>
                            <span className="font-semibold text-xl">Power BI</span>
                        </div>
                         <div className="tool-card">
                            <div className="tool-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sql-dataverse-color"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>
                            </div>
                            <span className="font-semibold text-xl">SQL/Dataverse</span>
                        </div>
                        <div className="tool-card">
                            <div className="tool-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="excel-color"><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125H6.75m13.5 4.5H1.5m16.5 0a1.125 1.125 0 001.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H17.25m-13.5 4.5h13.5m-13.5 0a1.125 1.125 0 01-1.125-1.125v-8.625c0-.621.504-1.125 1.125-1.125h13.5c.621 0 1.125.504 1.125 1.125v8.625a1.125 1.125 0 01-1.125 1.125h-1.5m-13.5 0H1.5m16.5 0h1.5m-16.5 0a1.125 1.125 0 001.125-1.125v-8.625a1.125 1.125 0 00-1.125-1.125H4.5A1.125 1.125 0 003.375 8.25v8.625c0 .621.504 1.125 1.125 1.125h1.5m-1.5-1.125a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375v1.125a.375.375 0 01-.375.375h-3.75a.375.375 0 01-.375-.375v-1.125zm.375-3.75a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375v1.125a.375.375 0 01-.375.375h-3.75a.375.375 0 01-.375-.375V14.25zm.375-3.75a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375v1.125a.375.375 0 01-.375.375h-3.75a.375.375 0 01-.375-.375V10.5zm10.125-3.375a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375v1.125a.375.375 0 01-.375.375h-3.75a.375.375 0 01-.375-.375V7.125zm.375 3.375a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375v1.125a.375.375 0 01-.375.375h-3.75a.375.375 0 01-.375-.375V10.5zm.375 3.75a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375v1.125a.375.375 0 01-.375.375h-3.75a.375.375 0 01-.375-.375V14.25z" /></svg>
                            </div>
                            <span className="font-semibold text-xl">Excel</span>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-slate-300 font-bold text-lg">08</span>
            </section>

        </div>
    );
};

export default App;
