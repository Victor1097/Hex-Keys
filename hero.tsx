import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog.tsx";

function Benefit({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex min-h-24 items-start gap-3 rounded-2xl border border-border bg-white/[0.03] p-4 text-foreground backdrop-blur-sm">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                {icon}
            </div>
            <div className="min-w-0">
                <strong className="block text-sm font-semibold">{title}</strong>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {description}
                </span>
            </div>
        </div>
    );
}

function PurchaseStep({
    number,
    title,
    description,
    icon,
}: {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="relative flex gap-3 rounded-2xl border border-border bg-white/[0.03] p-4 text-foreground backdrop-blur-sm">
            <span className="absolute right-3 top-3 text-3xl font-black text-primary/10">
                {number}
            </span>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                {icon}
            </div>
            <div className="relative min-w-0 pr-5">
                <strong className="block text-sm font-bold">{title}</strong>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
}

export function Hero() {
    const { store } = React.useContext(SharpifyApi.SharpifyReact.TemplateContext);
    const [purchaseGuideOpen, setPurchaseGuideOpen] = React.useState(false);

    return (
        <>
            <Dialog open={purchaseGuideOpen} onOpenChange={setPurchaseGuideOpen}>
                <DialogContent className="max-h-[calc(100vh-2rem)] w-[calc(100%-1.5rem)] max-w-2xl rounded-2xl bg-background p-5 text-foreground sm:p-6">
                    <DialogHeader className="pr-8">
                        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 12h8" />
                                <path d="m13 7 5 5-5 5" />
                            </svg>
                        </div>
                        <DialogTitle className="text-xl sm:text-2xl">
                            Como comprar?
                        </DialogTitle>
                        <DialogDescription className="mt-2 leading-relaxed text-muted-foreground">
                            É bem simples. Siga estas quatro etapas para concluir sua compra e receber o produto.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <PurchaseStep
                            number="01"
                            title="Selecione o produto"
                            description="Explore o catálogo e abra o produto que deseja comprar."
                            icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>}
                        />
                        <PurchaseStep
                            number="02"
                            title="Adicione ao carrinho"
                            description="Escolha as opções disponíveis e adicione o produto ao seu carrinho."
                            icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2 2h2l2.7 12.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L22 7H5" /><path d="M12 9v6M9 12h6" /></svg>}
                        />
                        <PurchaseStep
                            number="03"
                            title="Gere o pagamento"
                            description="Revise o carrinho, finalize o pedido e gere o pagamento via Pix."
                            icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h2" /></svg>}
                        />
                        <PurchaseStep
                            number="04"
                            title="Receba seu produto"
                            description="Após a confirmação do pagamento, você receberá o produto e as instruções de entrega."
                            icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /><path d="m9 16 2 2 4-4" /></svg>}
                        />
                    </div>

                    <DialogFooter className="mt-5 flex-col-reverse sm:flex-row">
                        <button
                            type="button"
                            onClick={() => setPurchaseGuideOpen(false)}
                            className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-white/[0.03] px-4 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
                        >
                            Fechar
                        </button>
                        <a
                            href="#section-products"
                            onClick={() => setPurchaseGuideOpen(false)}
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/80"
                        >
                            Escolher produto
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                        </a>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <section className="relative isolate py-5 sm:py-7 lg:py-9" aria-labelledby="home-hero-title">
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[calc(100%+8rem)] w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                    }}
                >
                <div className="absolute -left-24 top-8 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute -top-20 left-[24%] h-52 w-[34rem] rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-[4%] top-20 h-[26rem] w-[26rem] rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-20 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] lg:gap-10">
                <div className="max-w-3xl">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 7h-9" />
                            <path d="M14 17H5" />
                            <circle cx="17" cy="17" r="3" />
                            <circle cx="7" cy="7" r="3" />
                        </svg>
                        Bem-vindo à {String(store.info.name)}
                    </div>

                    <h1 id="home-hero-title" className="max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                        Compre em minutos — entrega rápida e pagamento seguro
                    </h1>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Escolha o produto, pague com Pix e receba sem complicação. Uma experiência simples, rápida e segura do início ao fim.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a
                            href="#section-products"
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <path d="M3 6h18" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                            Ver produtos
                        </a>
                        <button
                            type="button"
                            onClick={() => setPurchaseGuideOpen(true)}
                            aria-haspopup="dialog"
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-white/[0.03] px-5 text-sm font-bold text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-white/5"
                        >
                            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.1 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4" />
                                <path d="M12 18h.01" />
                            </svg>
                            Como comprar?
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Benefit
                        title="Entrega imediata"
                        description="Muitos produtos chegam na hora."
                        icon={<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>}
                    />
                    <Benefit
                        title="Pague com Pix"
                        description="Aprovação rápida e prática."
                        icon={<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 2 4 4-4 4-4-4 4-4Z" /><path d="m6 8 4 4-4 4-4-4 4-4Z" /><path d="m18 8 4 4-4 4-4-4 4-4Z" /><path d="m12 14 4 4-4 4-4-4 4-4Z" /></svg>}
                    />
                    <Benefit
                        title="Compra segura"
                        description="Ambiente protegido em cada etapa."
                        icon={<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" /><path d="m9 12 2 2 4-4" /></svg>}
                    />
                    <Benefit
                        title="Suporte humano"
                        description="Ajuda antes e depois da compra."
                        icon={<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3v5ZM3 19a2 2 0 0 0 2 2h1v-7H3v5Z" /></svg>}
                    />
                </div>
                </div>
            </section>
        </>
    );
}
