
<script lang="ts">
    import { onMount } from 'svelte';
    import Header from './lib/components/Header.svelte';
    import Endorsement from './lib/components/Endorsement.svelte';
    import Boxes from './lib/components/Boxes.svelte';

    let targetX: number = 0;
    let targetY: number = 0;
    let currentX: number = 0;
    let currentY: number = 0;
    let glowEl: HTMLDivElement | null = null;

    function handleMouseMove(e: MouseEvent): void {
        targetX = e.clientX;
        targetY = e.clientY;
    }

    onMount(() => {
        let rafId: number;

        function animate(): void {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;
            if (glowEl) {
              glowEl.style.background = `radial-gradient(650px circle at ${currentX}px ${currentY}px, rgba(56,189,248,0.14), transparent 40%)`;
            }
            rafId = requestAnimationFrame(animate);
        }

        rafId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(rafId);
    });
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div class="relative h-screen w-full bg-black">
    <!-- background grid -->
    <div class="absolute inset-0 root-bg">
        <div
          class="pointer-events-none absolute inset-0"
          style="background: linear-gradient(135deg, rgba(56,189,248,0.14), transparent 25%, transparent 75%, rgba(56,189,248,0.08));"
        ></div>
        <div
          class="pointer-events-none absolute -inset-6"
          style="
            background: linear-gradient(
              135deg,
              rgba(56,189,248,0.14),
              transparent 25%,
              transparent 75%,
              rgba(56,189,248,0.08)
            );
            transform: translate(0px, 20px);
          "
        ></div>

        <div bind:this={glowEl} class="pointer-events-none absolute inset-0"></div>
    </div>


    <!-- cursor-following light -->


    <!-- content -->
    <div class="relative w-250 mx-auto">
        <Header/>
        <Boxes />
        <Endorsement />
    </div>
</div>
