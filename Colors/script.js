var index=0;
        function changeColors(){
            var colors=["violet","indigo","blue","green","yellow","orange","red"];
            document.getElementsByTagName("body")[0].
            style.background=colors[index++];
            if(index > colors.length - 1)
            index=0;

        }