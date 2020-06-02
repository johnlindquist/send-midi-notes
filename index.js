let easymidi = require('easymidi');
let output = new easymidi.Output('My Virtual Midi Output', true);

let minute = 60000
let bpm = 60
let division = 8
let interval = minute / bpm / division

let beat = 1

let kick = {
    note: 36,
    velocity: 127
}

let snare = {
    note: 38,
    velocity: 127
}

let hat = {
    note: 42,
    velocity: 127
}

let tick = () => {
    console.log(beat)
    output.send("noteon", hat)
    output.send("noteoff", hat)

    if (beat == 1) {
        output.send("noteon", kick)
        output.send("noteoff", kick)
    }

    if (beat == 5) {
        output.send("noteon", snare)
        output.send("noteoff", snare)
    }

    if (beat == 5) {
        output.send("noteon", kick)
        output.send("noteoff", kick)
    }

    beat = (beat % division) + 1
}



setInterval(tick, interval)