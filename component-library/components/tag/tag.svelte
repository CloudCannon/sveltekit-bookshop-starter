<script>
    export let text;
</script>

<span class="c-tag">{text}</span>

<style>
    .c-tag {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        padding: 0 6px;
        height: 20px;

        font-size: 10px;
        font-weight: bold;

        border: solid 2px var(--foreground);
        border-left-width: 10px;
        border-left-style: solid;
        border-radius: 4px;
    }
</style>
