<template>
  <div
      class="entry-container mb-3 pointer p-2"
      @click="$router.push({ name: 'entry', params: { id:10 }})"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolore ducimus ea enim error expedita facere, iure laborum nam odit officiis quam quasi qui sint veniam voluptatem voluptatibus! Eligendi, quae.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45);
  }
  .entry-description{
    font-size: 12px;
  }
}
</style>