<script>
    import { goto } from '@sveltech/routify'
    import Advice from '../components/Advice.svelte'
    import FullScreenBtn from '../components/FullScreenBtn.svelte'
</script>

<main>
    <FullScreenBtn />

    <h1>L'histoire du rap</h1>
    <div class="player">
        <button disabled>
            <i class="fa fa-backward"></i>
        </button>
        <button on:click={$goto('/lhistoiredurap')}>
            <i class="fa fa-play"></i>
        </button>
        <button disabled>
            <i class="fa fa-forward"></i>
        </button>
    </div>

    <Advice text="Pour une expérience plus immersive, passez en plein écran"/>
</main>

<style>

main {
    background-image: url(/pics/hin-bong-yeung-jF946mh5QrA-unsplash.jpg);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-family: 'montserrat';
    font-weight: 800;
    font-size: 4.5em;
    margin: 0;
    margin-bottom: 30px;
    color: #fff;
}


.player i {
    color: #fff;
    margin: 0 15px;
    font-size: 1.8em;
    transition: transform .3s ease-in-out;
}

.player i.fa-play {
    font-size: 2.4em;
    cursor: pointer;
}

.player i.fa-play:hover {
    transform: scale(1.1);
}

button {
    background: none;
    border: none;
}

</style>