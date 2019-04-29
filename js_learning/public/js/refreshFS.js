/**
 * Created by gthowe on 17/3/20.
 */
/**
 * 基于iphone375宽度的基准做制作，把body的font-size按比例设置成约等于10px
 * 设置字体大小用单位em  1em=10px,1.4em=14px....以此类推
 * @type {string}
 */
document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 37.5 + 'px';