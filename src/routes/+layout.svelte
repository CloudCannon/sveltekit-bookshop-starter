<script></script>

<slot />

<style>
    :global(*) {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        box-sizing: border-box;
    }

    :global(:root) {
        --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        --font-weight: 600;
        --column: 800px;
        --max-column: 90%;
        --background: #e4e4e4;
        --foreground: #1c1c1c;
        --translucent: #1c1c1c19;
    }

    :global(body) {
        -webkit-overflow-scrolling: touch;

        font-family: var(--font);
        font-size: 18px;
        font-weight: var(--font-weight);
        background-color: var(--background);
        color: var(--foreground);

        margin: 0;
        min-height: 100vh;
        padding: 120px 5vw;
    }

    :global(body > main) {
        display: flex;
        flex-direction: column;
        gap: 40px;

        width: var(--column);
        max-width: var(--max-column);
        margin: 0 auto;
    }

    :global(a) {
        color: var(--foreground);
    }

    :global(a:hover) {
        opacity: 0.75;
    }
</style>
