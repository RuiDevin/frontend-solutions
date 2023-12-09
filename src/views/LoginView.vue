<template>
    <div class="flex flex-row min-h-screen w-screen">
        <h1 class="font-black fixed ml-2 mt-2"><span class="text-orange-400 text-3xl">Ruivo</span><span class="font-semibold">Solutions</span></h1>
        <div class="w-1/2 flex flex-col mt-52 items-center gap-6">
            <h1 class="font-medium mb-4 text-3xl">Informe seus dados</h1>
            <div class="flex flex-row">
                <i class="fa-solid fa-user bg-gray-200 p-3 rounded-l-xl text-lg" :class="userFocus ? 'text-orange-500' : 'text-black'"></i>
                <input type="text" class="bg-gray-200 py-2 rounded-r-xl outline-none text-lg w-72" @focus="userFocus = !userFocus" @focusout="userFocus = false" placeholder="Nome">
            </div>
            <div class="flex flex-col">
                <div class="flex flex-row">
                    <i class="fa-solid fa-lock bg-gray-200 p-3 rounded-l-xl text-lg" :class="passwordFocus ? 'text-orange-500' : 'text-black'"></i>
                    <input type="text" class="bg-gray-200 py-2 rounded-r-xl text-lg outline-none w-72" @focus="passwordFocus = !passwordFocus" @focusout="passwordFocus = false" placeholder="Senha">
                </div>
                <span class="text-orange-400 font-semibold cursor-pointer text-right">Esqueceu sua senha?</span>            
            </div>
            <div>
                <button class="bg-orange-400 text-white py-2 px-12 rounded-xl text-1xl font-black">Entrar</button>
            </div>
        </div>
        <div class="w-1/2 bg-cover bg-right" style="background-image: url(https://t.ctcdn.com.br/JO1hpEXNni6KPaYFDhoRz_2WH9k=/1920x1080/smart/i523609.jpeg)">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const userFocus = ref(false)
const passwordFocus = ref(false)
</script>
