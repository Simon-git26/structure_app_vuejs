<template>
  <div>
    <div class="row">
    <!-- Tableau -->
    <div class="table-responsive mb-5 mt-5 pr-5 pl-5">
      <table class="table table-striped table-dark">
        <!-- Header Tableau -->
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Film</th>
            <th scope="col">Horaire</th>
            <th scope="col">Detail Film</th>
          </tr>
        </thead>
        <!-- Body Tableau -->
        <tbody>
          <tr class="tabrow">
            <th scope="row">05/08</th>
            <td>Nom du film 1</td>
            <td>De x a x</td>
            <td><a href="#" class="btn btn-secondary">Details</a></td>
          </tr>

          <tr class="tabrow">
            <th scope="row">05/08</th>
            <td>Nom du film 2</td>
            <td>De x a x</td>
            <td><a href="#" class="btn btn-secondary">Details</a></td>
          </tr>

          <tr class="tabrow">
            <th scope="row">05/08</th>
            <td>Nom du film 3</td>
            <td>De x a x</td>
            <td><a href="#" class="btn btn-secondary">Details</a></td>
          </tr>

        </tbody>
      </table>
    </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "Films_component",
};
</script>
