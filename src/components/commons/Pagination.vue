<template>
    <div class="paginationContainer">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.paginationContainer {

    nav {
        display: flex;
        align-items: center;
        margin-top: 12px;
    }

    ul.pagination {
        margin: 0 !important;

        li {
            a {

                span {
                    padding: 0 !important;
                    background: transparent;
                }
            }
        }
    }
}
</style>