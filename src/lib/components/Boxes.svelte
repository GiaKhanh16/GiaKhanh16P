<div class="flex flex-row items-center justify-center text-white mt-20 gap-10 px-20 font-mono">
    <a
        href="https://apps.apple.com/us/app/walk-up/id6743056436"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex flex-col border border-stone-900 h-74 w-74 bg-black-felt cursor-pointer text-inherit no-underline"
    >
        <div class="flex-2 text-center p-2.5 bg-black-felt">
            <div class="w-full h-full border border-stone-900">
                <div class="p-2 bg-star-dust w-full h-full">
                    <div class="group relative w-full h-full flex items-center justify-center bg-[linear-gradient(#ffffff0d_1px,transparent_1px),linear-gradient(90deg,#ffffff0d_1px,transparent_1px)] bg-size-[9px_9px]">
                        <img src={WalkUp} alt="Logo" class="w-26" />

                        <div class="absolute bottom-0 left-0 w-full pb-2 text-center text-xs text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Read case study →
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-1 flex flex-col pl-4 pr-4 pb-3 pt-1">
            <span class="text-base text-white">WalkUp</span>
            <div class="w-full h-px bg-stone-900 my-2"></div>
            <span class="text-xs/5 text-[#b3b3b3] font-light">
                An all-in-one walk-out music player for sport teams. Game-day ready in minutes!
            </span>
        </div>

        <div class="absolute bottom-0 right-0 w-4 h-4 pointer-events-none">
            <Icon />
        </div>
    </a>

    <a
        href="https://newton.app"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex flex-col border border-stone-900 h-74 w-74 bg-black-felt cursor-pointer text-inherit no-underline"
    >
        <div class="flex-2 text-center p-2.5 bg-black-felt">
            <div class="w-full h-full border border-stone-900">
                <div class="p-2 bg-star-dust w-full h-full">
                    <div class="group relative w-full h-full flex items-center justify-center">
                        <img src={Newton} alt="Logo" class="w-43" />

                        <div class="absolute bottom-0 left-0 w-full pb-2 text-center text-xs text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Read case study →
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-1 flex flex-col pl-4 pr-3 pb-3 pt-1">
            <span class="text-base text-white">Newton</span>
            <div class="w-full h-px bg-stone-900 my-2"></div>
            <span class="text-xs/5 text-[#b3b3b3] font-light">
                Must use app for calculations and engineering. It is just so much faster.
            </span>
        </div>

        <div class="absolute bottom-0 right-0 w-4 h-4 pointer-events-none">
            <Icon />
        </div>
    </a>

    <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex flex-col border border-stone-900 h-74 w-74 bg-black-felt cursor-pointer text-inherit no-underline"
    >
        <div class="flex-2 text-center p-2.5 bg-black-felt">
            <div class="w-full h-full border border-stone-900">
                <div class="p-2 bg-star-dust w-full h-full">
                    <div class="group relative w-full h-full flex items-center justify-center bg-[linear-gradient(#ffffff0d_1px,transparent_1px),linear-gradient(90deg,#ffffff0d_1px,transparent_1px)] bg-size-[9px_9px]">
                        <img src={SwiftClasses} alt="Logo" class="w-15" />

                        <div class="absolute bottom-0 left-0 w-full pb-2 text-center text-xs text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Read case study →
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-1 flex flex-col px-4 pb-3 pt-1">
            <span class="text-base text-white">SwiftClasses</span>
            <div class="w-full h-px bg-stone-900 my-2"></div>
            <span class="text-xs/5 text-[#b3b3b3] font-light">
                Class management app. Agentic AI integrated. Insanely fast and intuitive.
            </span>
        </div>

        <div class="absolute bottom-0 right-0 w-4 h-4 pointer-events-none">
            <Icon />
        </div>
    </a>
</div>

<script>
    import Newton from '../../assets/Logos/Newton.webp';
    import SwiftClasses from '../..//assets/Logos/SwiftClassesP.png';
    import WalkUp from '$src/assets/Logos/PlayerHeader.png';
    import Icon from './ShareSVG.svelte';

</script>
