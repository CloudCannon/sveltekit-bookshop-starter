<script>
    import { Bookshop } from "@bookshop/sveltekit-bookshop";
    export let type;
    export let content_html;
</script>

<div class="c-content c-content--{type}">
    {#if type === "note"}
        <Bookshop component="tag" text="Note" />
    {/if}
    {@html content_html}
</div>

<style>
    .c-content {
        box-sizing: border-box;
        padding: 15px 0 15px 15px;
        border-left: solid 8px var(--foreground);
    }

    .c-content--note {
        background-color: var(--translucent);
    }

    :global(.c-content > :first-child) {
        margin-top: 0;
    }

    :global(.c-content > :last-child) {
        margin-bottom: 0;
    }
</style>
