import { parse } from 'subtitle'
import {sample } from './sample'
import { onMount } from 'svelte';
import App from '../svelte/Popup.svelte';

const div = document.createElement('div');
div.className = 'otus-video-extension'
document.body.append(div)

onMount(() => {
    console.log('the component has mounted');
})

const parseSrt = (data) => {
    let items = []
    try {
        items = parse(data).map(i => ({
            start: parseInt(i.start/1000),
            text: i.text
        }))
    } catch {
        console.log('Failed to parse .srt file')
    }
    return items
}

const app = new App({
	target: document.body,
	props: {
		data: parseSrt(sample)
    }
});

window.app = app;

export default app;