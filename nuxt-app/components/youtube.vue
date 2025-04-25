<template>
<div class="videoBox w-full relative overflow-hidden mt-10">
    <div class="youtube-wrapper relative flex justify-center xl:pr-32 z-10">
        <iframe
        src="https://www.youtube.com/embed/XjFrFybsbpA" 
        class="absolute md:w-[70%] md:h-[70%] 
        w-[80%] h-[80%] rounded-3xl overflow-hidden" />
    </div>
    <img src="../assets/img/svg/colorpaper-purple.png" class="w-full absolute md:-bottom-20 -bottom-10 z-0">
</div>
</template>

<style scoped>
.youtube-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 高寬比 */
    z-index: 50px;
    overflow: hidden;
}
.youtube-wrapper iframe {
    position: absolute;
    top: 0;
}
</style>
    