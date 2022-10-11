<?php
header('Content-Type: application/json');

ob_start(); ?>
    <a class="gallery-items__item"
       href="/images/content/gallery-items/1.jpg"
       data-fancybox="images"><img
                src="/images/content/gallery-items/thmb1.jpg" alt="lorem"></a>
    <a class="gallery-items__item" href="/images/content/gallery-items/2.jpg"
       data-fancybox="images"><img src="/images/content/gallery-items/thmb2.jpg"
                                   alt="lorem"></a>
    <a class="gallery-items__item"
       href="/images/content/gallery-items/3.jpg"
       data-fancybox="images"><img
                src="/images/content/gallery-items/thmb3.jpg" alt="lorem"></a>
    <a class="gallery-items__item" href="/images/content/gallery-items/4.jpg"
       data-fancybox="images"><img src="/images/content/gallery-items/thmb4.jpg"
                                   alt="lorem"></a>
    <a class="gallery-items__item"
       href="/images/content/gallery-items/5.jpg"
       data-fancybox="images"><img
                src="/images/content/gallery-items/thmb5.jpg" alt="lorem"></a>
    <a class="gallery-items__item" href="/images/content/gallery-items/6.jpg"
       data-fancybox="images"><img src="/images/content/gallery-items/thmb6.jpg"
                                   alt="lorem"></a>
    <a class="gallery-items__item"
       href="/images/content/gallery-items/7.jpg"
       data-fancybox="images"><img
                src="/images/content/gallery-items/thmb7.jpg" alt="lorem"></a>
    <a class="gallery-items__item" href="/images/content/gallery-items/8.jpg"
       data-fancybox="images"><img src="/images/content/gallery-items/thmb8.jpg"
                                   alt="lorem"></a>
    <a class="gallery-items__item"
       href="/images/content/gallery-items/9.jpg"
       data-fancybox="images"><img
                src="/images/content/gallery-items/thmb9.jpg" alt="lorem"></a>
    <a class="gallery-items__item" href="/images/content/gallery-items/10.jpg"
       data-fancybox="images"><img src="/images/content/gallery-items/thmb10.jpg" alt="lorem"></a>
    <a class="gallery-items__item" href="/images/content/gallery-items/11.jpg"
       data-fancybox="images"><img src="/images/content/gallery-items/thmb11.jpg" alt="lorem"></a>
    <a class="gallery-items__item" href="/images/content/gallery-items/12.jpg"
       data-fancybox="images"><img src="/images/content/gallery-items/thmb12.jpg" alt="lorem"></a>
<? $html = ob_get_clean();

echo json_encode(array(
    'status' => true,
    'html' => $html
));
exit();