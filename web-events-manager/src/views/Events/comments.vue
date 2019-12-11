<template>
  <div class="comments">
    <h3>Comentarios</h3>
    <div class="card">
      <div class="card-header">dsdss</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer class="blockquote-footer">
            Someone famous in
            <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    <pre>{{commentsOfEvent}}</pre>
  </div>
</template>

<script>
import apiCall from "@/utils/api";
export default {
  name: "comments",
  props: ["list"],
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    this.searchComments();
  },
  methods: {
    searchComments: async function() {
      const url = "comments";
      try {
        const data = await apiCall({ url });
        this.comments = await data.comments;
      } catch (error) {
        throw error;
      }
    }
  },
  computed:{
      commentsOfEvent(list){
          return this.comments.filter(comment => comment.event.id == list)

      }
  }
};
</script>