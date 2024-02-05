import { ChevronDown, Download, PlaneIcon, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Social from "./Social";

export default function Hero() {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                            Designer | Illustrator
                        </div>
                        <h1 className="h1">Hello, my name is Raihan</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-8">
                            A designer and illustrator with a keen eye for
                            aesthetics, blending creativity and precision to
                            bring visual concepts to life.
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="secondary" className="gap-x-2">
                                    Download CV <Download size={18} />
                                </Button>
                            </Link>
                        </div>
                        <Social
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    <div className="hidden xl:flex relative">Image</div>
                </div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <ChevronDown className="text-3xl text-primary" />
            </div>
        </section>
    );
}
