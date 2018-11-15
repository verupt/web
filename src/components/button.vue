<template>
  <button type="button">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
  @import '../colors';

  button{
    display: inline-block;
    position: relative;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0.5em 1em;
    font-size: 14px;
    border-radius: 4.2px;
    border: 1px solid $green;
    color: $green;
    outline: none;
    background-color: rgba(#fff, 0);
    transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
    cursor: pointer;

    &:hover{
      background-color: $green;
      color: #fff;
    }
  }
</style>
