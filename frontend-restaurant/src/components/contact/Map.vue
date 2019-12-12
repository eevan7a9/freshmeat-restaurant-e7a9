<template>
  <div class="map">
    <LMap :zoom="zoom" :maxZoom="13" :minZoom="13" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker :lat-lng="markerLatLng"></LMarker>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 13,
      center: [47.41322, -1.219482],
      markerLatLng: [47.41322, -1.219482]
    };
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 350px;
  border: 3px solid #a8890f;
  background: #a8890f;
  z-index: 0;
}
</style>