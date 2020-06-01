<script>
    import ytThumb from 'youtube-img'
    export let item
    export let i
    export let select
</script>

<div class="playlistItemContainer">
    <img src={ytThumb(item.video, 'hq')} alt={item.title} on:click={() => select(i)}>
    <div>
        <h1 on:click={() => select(i)}>
            {item.title}
        </h1>
        <p>
            {item.description.substr(0, 130)}...
        </p>
    </div>
</div>

<style>

.playlistItemContainer {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    height: 130px;
    position: relative;
    grid-gap: 20px;
    margin: 10px 0;
}

.playlistItemContainer div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1,
p {
    text-align: left;
    color: #fff;
    font-size: .8em;
}

h1 {
    letter-spacing: 0;
    text-transform: none;
    margin-bottom: 0;
    font-size: 1em;
}

p {
    font-weight: 400;
    line-height: 1.1em;
}

img {
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
}

h1,
img {
    cursor: pointer;
}

</style>