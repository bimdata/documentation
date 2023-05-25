<template>
  <BIMDataIcon :name="name" :size="size" />
</template>

<script>
import BIMDataIcon from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIcon.js";

export default {
  components: {
    BIMDataIcon
  },
  props: {
    name: String,
    size: String,
  }
}
</script>

<style>

</style>