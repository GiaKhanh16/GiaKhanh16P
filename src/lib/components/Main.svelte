<div class=" mt-20 flex flex-col justify-center mx-auto gap-5">
    <div>
        Porfolios
    </div>
     <div class="text-3xl font-mono animate-text-gradient inline-flex bg-linear-to-r from-neutral-100 via-slate-i00 to-neutral-400 bg-size-[200%_auto] bg-clip-text leading-tight text-transparent">
        Ain't my web design skills slick?
    </div>

        <div class="mt-10 flex flex-row  items-center font-mono text-xs">
            {#each mainTabs as tab (tab)}
                <button
                    onclick={() => selectTab(tab)}
                    class="text-[13px] py-4 px-6 flex-1 text-center border-[0.5px] border-gray-500
                    {activeTab === tab ?
                    ' text-black  font-medium bg-slate-200' :
                    "text-white bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-fg:rgb(255_255_255/0.08)]"}"
                >
                    {tab}
                </button>
            {/each}
        </div>




</div>
<script lang="ts">
    import Banner from "$lib/components/Banners.svelte"

    var mainTabs = ["Newton", "WalkUp", "SwiftClasses", "MyTennisApp"]
    let activeTab = $state(mainTabs[0]);

    function selectTab(tab: string) {
          activeTab = tab;
    }
    import { onDestroy } from 'svelte';

    const CHARS = '!<>-f(x)[]{}=+*^?#';

    interface Props {
      text?: string;
    }

    let { text = 'Software Engineer' }: Props = $props();

    let display = $state<string>(text);
    let intervalId: ReturnType<typeof setInterval>;

    function play(): void {
      let frame = 0;
      const total = 24;

      clearInterval(intervalId);
      intervalId = setInterval(() => {
        frame++;
        display = text
          .split('')
          .map((c: string, i: number): string => {
            if (c === ' ') return ' ';
            const progress = frame - i * 1.2;
            return progress > total * 0.6
              ? c
              : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');

        if (frame > total + text.length) {
          clearInterval(intervalId);
          display = text;
        }
      }, 35);
    }

    $effect(() => {
      play();
    });

    onDestroy(() => clearInterval(intervalId));
</script>
