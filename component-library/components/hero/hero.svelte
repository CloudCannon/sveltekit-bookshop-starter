<script>
    import { Bookshop } from "@bookshop/sveltekit-bookshop";
    export let tags = [];
    export let title;
    export let content;
</script>

<div class="c-title">
    {#each tags as tag}
        <Bookshop component="tag" {...tag} />
    {/each}
    <h1 class="c-title__title">
        {title}
    </h1>
    {#if content}
        <Bookshop component="content" {...content} />
    {/if}
</div>

<style>
    .c-title__title {
        margin: 20px 0 15px;
        font-size: 28px;
    }
</style>
