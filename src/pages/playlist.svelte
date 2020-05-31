<script>
    import { goto } from '@sveltech/routify'

    import Advice from '../components/Advice.svelte'
    import FullScreenBtn from '../components/FullScreenBtn.svelte'
    import Selected from '../components/Selected.svelte'
    import StartPlaylist from '../components/StartPlaylist.svelte'
</script>

<main>
    <div class="buttonsContainer">
        <FullScreenBtn />
    </div>

</main>

<style>

main {
    background-color: #333;
    background-blend-mode: multiply;
}

</style>