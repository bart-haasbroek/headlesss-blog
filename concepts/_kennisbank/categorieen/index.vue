<script>
import Vue from "vue";

export default Vue.extend({
  middleware: [
    function ({ redirect }) {
      redirect("/kennisbank");
    },
  ],
});
</script>
