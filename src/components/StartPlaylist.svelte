<script>
    import { goto } from '@sveltech/routify'
</script>

<button on:click={$goto('/')}>
    <i class="fa fa-play"></i>
    <span>Lancer ma playlist</span>
</button>

<style>

button {
    background: rgb(255, 216, 58);
    color: #000;
    border-radius: 20px;
    padding: 5px 20px;
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
</style>