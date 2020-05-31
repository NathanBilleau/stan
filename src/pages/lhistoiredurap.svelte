<script>
    import { goto } from '@sveltech/routify'

    import Advice from '../components/Advice.svelte'
    import FullScreenBtn from '../components/FullScreenBtn.svelte'
    import Selected from '../components/Selected.svelte'
    import StartPlaylist from '../components/StartPlaylist.svelte'
</script>

<main>
    <FullScreenBtn />

    <h1>L'histoire du rap</h1>

    <p>
        Naviguez entre les différentes parties à l'aide des flèches <br>
        Sélectionnez celles qui vous intéressent en cliquand sur le + <br>
        Elles seront alors marquées du symbole <Selected /> <br>
        Lorsque votre choix est fait, cliques sur
        <StartPlaylist />
        <br>
        Votre playlist démarrera alors automatiquement
        <span>Bonne écoute !</span>
    </p>

    <button class="understood" on:click={$goto('/')}>
        <i class="fa fa-check"></i>
        Ok, j'ai compris
    </button>

    <Advice text="Pour une meilleure immersion, n'hésitez pas à porter un casque ou des écouteurs" />
</main>

<style>
main {
    background-image: url(/pics/hin-bong-yeung-jF946mh5QrA-unsplash.jpg);
    background-color: #333;
    background-blend-mode: multiply;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p {
    color: #fff;
    font-family: 'montserrat';
    font-weight: 600;
    text-align: center;
    line-height: 2em;
}

h1 {
    text-transform: uppercase;
    letter-spacing: .4em;
    color: rgb(255, 216, 58);
    font-size: 1em;
    font-family: 'montserrat';
    margin-bottom: 10vh;
}

span {
    color: rgb(255, 216, 58);
    display: block;
}

.understood {
    background: none;
    border:none;
    color: #fff;
    font-family: 'montserrat';
    font-size: 1.3em;
    font-weight: 600;
    cursor: pointer;
}
</style>