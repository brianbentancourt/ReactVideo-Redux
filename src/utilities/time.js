
function leftPad(num){
	const pad = '00';
	return pad.substring(0,pad.length-num.length) + num;
}

export function formatTime(secs){
	const minutos = parseInt(secs / 60, 10)
	const segundos = parseInt(secs % 60, 10)
	return `${leftPad(minutos.toString())}:${leftPad(segundos.toString())}`
}