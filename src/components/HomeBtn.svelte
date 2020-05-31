<script>
    import { goto } from '@sveltech/routify'

</script>

<button on:click={$goto('/')}>
    <i class="fa fa-home"></i>
</button>

<style>
button {
    border:none;
    background: none;
}

i {
    
    font-size: 1.6em;
    color: #fff;
    cursor: pointer;
}
</style>