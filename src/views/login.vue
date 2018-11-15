<template>
  <div class="card">
    <div class="brand">Verupt</div>
    <form>
      <Input label="Email" name="username"/>
      <Input label="Password" name="password" type="password"/>
      <div class="actions">
        <Button>Login</Button>
      </div>
    </form>
  </div>
</template>

<script>
import Button from '../components/button';
import Input from '../components/input';

export default {
  components: {
    Button,
    Input
  }
}
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Quicksand:500');
  @import '../colors';

  .card{
    background-color: #fff;
    margin: 5em auto 2em auto;
    padding: 1rem;
    width: 100%;
    max-width: 24em;
    border-radius: 10px;
    box-shadow: 0 4px 90px 4px rgba(#000, 0.18);
    box-sizing: border-box;
    transition: all 0.2s ease;

    @media screen and (max-width: 35em){
      &{
        box-shadow: none;
        margin-top: 4em;
      }
    }
  }

  .brand{
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 38px;
    text-align: center;
    color: $orange;
  }

  form{
    padding: 0 10%;
  }

  .actions{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>

