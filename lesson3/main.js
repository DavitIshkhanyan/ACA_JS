let link = 'http://imgur.com/a/cjh4E/zip';
// let link = 'http://imgur.com/OzZUNMM';
// let link = 'http://i.imgur.com/altd8Ld.png';
function imgurUrlParser(url) {
    let i = url.indexOf('com');
    let x = url.slice(i + 4);
    if (x.includes('/')) {
        let i = x.indexOf('/');
        id = x.slice(i + 1);
        let type = x.slice(0, i);
        if (type === 'a') {
            let i = id.indexOf('/');
            if (~i) {
                id = id.slice(0, i);
            }
            return { id, type: 'album' };
        } else {
            let i = id.indexOf('#');
            if (~i) {
                id = id.slice(0, i);
            }
            return { id, type: 'gallery' };
        }
    } else {
        let i = x.indexOf('.');
        if (~i) {
            console.log(i);
            x = x.slice(0, i);
        }
        return { id: x, type: 'image' };
    }
}
// console.log(imgurUrlParser('http://imgur.com/a/cjh4E'));
console.log(imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF'));
console.log(imgurUrlParser(link));

const prs = { Computer: 600, TV: 800, Radio: 50 };
// const prs = { Loafers: 50, Vans: 10, Crocs: 20 };
let x = Object.entries(prs);
console.log(x);
function products(p) {
    // const res = [];
    // for (let i in p) {
    //     if (p[i] > 500) {
    //     }
    //     console.log(p[i]);
    //     console.log(i);
    // }
    return (sortable = Object.entries(p)
        // .reduce(function (r, [k, v]) {
        //     if (v > 500) {
        //         console.log(k, v);
        //         console.log(r);
        //         r[k] = v;
        //         console.log(r);
        //     }
        //     console.log(k, v);
        // }, {}));
        .sort(([, a], [, b]) => b - a)
        // .reduce((r, [k, v]) => ({ ...r, [k]: v }), {}));
        .reduce((r, v) => (v[1] > 500 ? [...r, v[0]] : [...r]), []));
    // return (keysSorted = Object.keys(p).sort(function (a, b) {
    //     return p[b] - p[a];
    // }));
}
function products(p) {
    return (sortable = Object.entries(p)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, v) => (v[1] >= 500 ? [...r, v[0]] : [...r]), []));
}

const products = (p) =>
    Object.keys(p)
        .filter((x) => p[x] >= 500)
        .sort((a, b) => p[b] - p[a]);

console.log(products(prs));
