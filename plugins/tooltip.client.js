import Vue from 'vue'

Vue.directive('tooltip', {
    bind: function (el, binding, vnode) {
        // vnode.data.innerHTML = binding.value;
        el.style.position = 'relative';
        // el.innerHTML = binding.value;
        const tooltip = document.createElement('div');
        tooltip.style.width = '280px';
        tooltip.style.height = '300px';
        tooltip.style.fontSize = '13px';
        tooltip.style.backgroundColor = 'white';
        tooltip.style.position = 'absolute';
        tooltip.style.overflow = 'hidden';
        // tooltip.style.opacity = 0;
        // tooltip.style.display = 'none';



        tooltip.addEventListener('mouseover', function() {
            tooltip.style.opacity = 1;
            tooltip.style.display = 'block';
        });
        tooltip.addEventListener('mouseout', function() {
            // tooltip.style.opacity = 0;
            // tooltip.style.display = 'none';
        });

        const tooltipText = document.createElement('div');
        tooltipText.style.padding = '10px 20px';
        const tooltipImage = document.createElement('img');

        const atags = el.getElementsByTagName('a');
        for (let item of atags) {
            item.addEventListener('mouseover', function() {
                // tooltip.href = item.href;
                // console.log('item', item.getAttribute('data-Id'));
                const tooltipImageSrc = item.getAttribute('data-featured-image');
                tooltipImage.src = tooltipImageSrc || null;
                tooltipImage.style.width = '100%';

                const tooltipExcerpt = item.getAttribute('data-excerpt');
                tooltipText.innerHTML = tooltipExcerpt;

                tooltip.style.opacity = 1;
                tooltip.style.display = 'block';
                const itemWidth = item.offsetWidth;
                const tooltipWidth = tooltip.offsetWidth;
                const center = (tooltipWidth - itemWidth) / 2;
                tooltip.style.top = (item.offsetTop + 25) + 'px';
                tooltip.style.left = (item.offsetLeft - center) + 'px';
            });
            item.addEventListener('mouseout', function() {
                // tooltip.style.opacity = 0;
                // tooltip.style.display = 'none';
            });
        }
        tooltip.appendChild(tooltipImage);
        tooltip.appendChild(tooltipText);
        el.appendChild(tooltip);
    }
})