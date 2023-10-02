<template>
    <div class="text-center">
    <v-carousel cycle hide-delimiter-background>
      <v-carousel-item v-for="(review, index) in reviews" :key="index">
        <v-card variant="tonal" class="mx-auto"  >
          <v-card-title>{{ review.title }}</v-card-title>
          <v-card-text>{{ review.comment }}</v-card-text>
          <v-card-text class="text-center">
            <v-rating   v-model="review.rating" color="yellow" half-increments readonly></v-rating>
          </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviews: [
          {
            title: 'Great Product',
            comment: 'I love this product. It exceeded my expectations.',
            rating: 5
          },
          {
            title: 'Good Value for Money',
            comment: 'This product is worth every penny. Highly recommended.',
            rating: 4
          },
          {
          title: 'Excellent Quality',
          comment: 'The quality of this product is outstanding.',
          rating: 5
        },
        {
          title: 'Fast Shipping',
          comment: 'I have purchased several books from this store, and I must say that every book I have bought has been excellent. The selection is diverse, covering a wide range of genres and topics. Whether you are into fiction, non-fiction, or specialized literature, this store has something for everyone. The quality of the books is top-notch, and the prices are reasonable. I am a satisfied customer and will continue to shop here for my reading needs. Keep up the good work.',
          rating: 5
        }
       
         
        ]
      };
    }
  };
  </script>
  