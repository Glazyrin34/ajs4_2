export default function sortHealth(data) {
    data.sort((prev, next) => prev.health - next.health).reverse();
    return data;
}