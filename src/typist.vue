<template>

    <span class="typer">{{ text }}<span class="blinker">|</span></span>

</template>

<script>

    export default {

        props: {

            human: {
                type: Boolean,
                required: false,
                default: false,

            },

            typeInterval: {
                type: Number,
                required: false,
                default: 50,

            },

            pauseInterval: {
                type: Number,
                required: false,
                default: 2000,

            },

            words: {
                type: Array,
                required: true,

            }
        },


        data(){

            return {

                text: "",
                index: 0

            }

        },

        mounted(){

            if(process.client) this.addLetter();

        },


        methods: {

            removeLetter(){

                // this sets the text to itself but minus a letter
                this.text = this.text.slice(0, this.text.length -1);

                if (this.text.length > 0) {

                    // We still have text left
                    setTimeout(this.removeLetter, this.typeInterval * 0.75 )

                } else {

                    // Nothing left!

                    // go to the next word in the array
                    // if the next word doesn't exist, we go back to the first

                    this.index += 1;
                    if (this.index >= this.words.length) {
                        this.index = 0;
                    }

                    //pause after the word is erased
                    setTimeout(this.addLetter, this.pauseInterval * 0.3);
                }
            },

            addLetter() {

                const nextLetter = this.words[this.index][this.text.length];

                // Adds the next letter in a word
                this.text = this.text + nextLetter;

                if(this.text === this.words[this.index]){

                    // We're done with the word
                    this.text = this.text + ".";
                    setTimeout(this.removeLetter, this.pauseInterval);

                }else{

                    // We're still typing
                    const humanFactor = this.human ? Math.random() * this.typeInterval * 3 : 0;
                    setTimeout(this.addLetter, this.typeInterval + humanFactor);

                }

            }

        },

    }


</script>



<style lang="scss" scoped>


    @keyframes blink {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .typer {


        .blinker {

            animation: blink infinite 500ms;

        }

    }
</style>
