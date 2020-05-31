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

    <h1>L'histoire du rap</h1>

    <p>
        Naviguez entre les différentes parties à l'aide des flèches <br>
        Sélectionnez celles qui vous intéressent en cliquand sur le + <br>
        Elles seront alors marquées du symbole <Selected /> <br>
        Lorsque votre choix est fait, cliques sur
        <StartPlaylist disabled={true} />
        <br>
        Votre playlist démarrera alors automatiquement
        <span>Bonne écoute !</span>
    </p>

    <button class="understood" on:click={$goto('/playlist')}>
        <i class="fa fa-check"></i>
        Ok, j'ai compris
    </button>

    <Advice text="Pour une meilleure immersion, n'hésitez pas à porter un casque ou des écouteurs" />
</main>

<style>
main {
    background-color: #333;
    background-blend-mode: multiply;
}

p {
    color: #fff;
    font-weight: 600;
    text-align: center;
    line-height: 2em;
}

h1 {
    text-transform: uppercase;
    letter-spacing: .4em;
    color: rgb(255, 216, 58);
    font-size: 1em;
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
    font-size: 1.3em;
    font-weight: 600;
    cursor: pointer;
}
</style>