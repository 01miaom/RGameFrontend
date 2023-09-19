//the example in test2.html
let currentPage = null;

        // openpage
        function openPage(pageUrl, pageTitle) {
            const pageFrame = document.createElement('iframe');
            pageFrame.src = pageUrl;
            pageFrame.style.display = 'block';
            document.getElementById('pageContainer').appendChild(pageFrame);

            // set current page
            currentPage = {
                title: pageTitle,
                frame: pageFrame
            };

            // update currentpage
            pageFrame.addEventListener('mouseenter', function() {
                currentPage = {
                    title: pageTitle,
                    frame: pageFrame
                };
            });
        }

      
        function closePage() {
            if (currentPage) {
                currentPage.frame.style.display = 'none';
                currentPage = null;
            }
        }

        function getOpenPages() {
            const openPages = [];
            const pageFrames = document.querySelectorAll('iframe');
            
            pageFrames.forEach(frame => {
                openPages.push({
                    title: frame.getAttribute('data-title'),
                    frame: frame
                });
            });

            return openPages;
        }

        // change order
        function changePageOrder(newOrder) {
            const pageContainer = document.getElementById('pageContainer');
            pageContainer.innerHTML = '';

            newOrder.forEach(page => {
                pageContainer.appendChild(page.frame);
            });
        }

        // get currentpage
        function getCurrentPage() {
            return currentPage ? currentPage.title : 'No page';
        }

        window.closePage = closePage;
        window.getOpenPages = getOpenPages;
        window.changePageOrder = changePageOrder;
        window.getCurrentPage = getCurrentPage;
