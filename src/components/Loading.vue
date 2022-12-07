<template>
    <div class="loader">
        
        <div class="lds-circle"><div></div></div>

        <div class="text-white"><strong>Loading...</strong></div>
    </div>
</template>

<script>
export default {
   
};
</script>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.loader {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url('https://wallpapers.com/images/hd/rick-and-morty-under-the-sea-ocidh9za5jy6pao4.jpg');
    background-position: center;
    object-fit: cover;
}
.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: #cef;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>