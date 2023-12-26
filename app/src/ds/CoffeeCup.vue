<template>
  <div class="coffee">
    <div class="coffee-coffee" />
    <div class="coffee-mug">
      <div class="coffee-cup" />
      <div class="coffee-wing" />
    </div>
    <div class="coffee-plate" />
  </div>
</template>

<style lang="scss" scoped>
@function gray($rgb) {
  @return rgb($rgb, $rgb, $rgb);
}

@mixin coffee-static {
  height: 40px;
  width: 80px;
  left: 25px;
}

.coffee {
  position: relative;
  padding-top: 50px;

  &-coffee {
    width: 40px;
    height: 5px;
    position: absolute;
    background-color: rgb(55, 45, 45);
    z-index: 101;
    bottom: 80px;
    left: 45px;
    border-radius: 50%;
    transform-origin: bottom center;
    animation: fill-cup 2s linear 0s infinite alternate;

    &--static {
      animation: none;
      @include coffee-static;
    }
  }

  &-cup {
    width: 99px;
    height: 80px;
    background-color: gray(249);
    position: absolute;
    z-index: 100;
    bottom: 28px;
    left: 15px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border: 1px solid gray(230);
    border-top: none;

    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 60px;
      border-left: 5px solid gray(230);
      border-bottom-left-radius: 30%;
      margin-left: 10px;
    }

    &::after {
      content: '';
      display: block;
      width: 98px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid gray(230);
      background-color: gray(250);
      position: absolute;
      bottom: 50px;
      left: -1px;
    }
  }

  &-wing {
    width: 40px;
    height: 40px;
    background-color: transparent;
    margin: auto;
    position: absolute;
    z-index: 99;
    bottom: 60px;
    right: -12px;
    border-radius: 50%;
    border: 12px solid gray(250);
  }

  &-plate {
    border-radius: 50%;
    width: 130px;
    height: 80px;
    background-color: gray(245);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 98;
    box-shadow: -5px 5px 5px 0px rgba(gray(50), .6);

    &::before {
      content: '';
      background-color: gray(235);
      width: 70px;
      height: 40px;
      display: block;
      border-radius: 50%;
      border: 0px solid transparent;
      border-left: 10px solid rgba(gray(100), .6);
      border-bottom: 1px solid rgba(gray(100), .6);
    }
  }
}

@keyframes fill-cup {
  100% {
    @include coffee-static;
  }
}
</style>
