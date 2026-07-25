
<script lang="ts">
  var tabs = ["CASE STUDIES","GITHUB", "LINKEDIN"]

</script>



<div class="flex  pt-5  font-mono items-center justify-between">
    <!-- <div >NEWTON</div> -->
    <span class="text-white text-xl ">Khanh Nguyen</span>

    <div class="flex gap-10 ">
        {#each tabs as tab, i (tab)}
            <button
                class="text-tabBarText text-[13px] hover:cursor-pointer"
                class:border-b={i === 0}
            >
                {tab}
            </button>
        {/each}
    </div>

    <!-- <div class="justify-self-end text-tabBarText text-xs border border-white p-2 mr-5">
        Log In
    </div> -->
</div>
