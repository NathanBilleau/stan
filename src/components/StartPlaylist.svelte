<script>
    import { goto } from '@sveltech/routify'
    export let disabled = false
    export let link
    export let text
    export let icon
</script>

<button on:click={disabled ? null : $goto(link)}>
    {#if icon}
        <i class="fa fa-{icon}"></i>
    {/if}
    <span>{text}</span>
</button>

<style>

button {
    background: rgb(255, 216, 58);
    color: #000;
    border-radius: 20px;
    padding: 10px 20px;
    display: block;
    width: fit-content;
    margin: 10px auto;
    text-decoration: none;
    text-transform: uppercase;
    font-family: var(--font);
    font-size: .9em;
    cursor: pointer;
    border:none;
    font-weight: 800;
}

button .fa {
    font-size: .8em;
    margin-right: 5px;
}

button span {
    color: #000;
    display: inline-block;
}
</style>