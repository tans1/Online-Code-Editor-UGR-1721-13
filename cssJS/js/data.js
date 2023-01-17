// THIS FILE SERVES AS A DATABASE FOR THIS ASSIGNMENT

const data = {
    htmlCode : {
        mainPart : `<section class="sideBar__container">
                        <nav class="sideBar">
                            <ul>
                                <li id="top"  class="tutorial topic">What is HTML?</li>
                                <li class="tutorial topic">what is tag and element</li>
                                <li class="show-submenu-one">
                                    <span class="tutorial topic">Basic HTML tags</span>
                                    <ul class="sub-menu one">
                                        <li class="tutorial topic">meta tags</li>
                                        <li class="tutorial topic">heading tag</li>
                                        <li class="tutorial topic">paragraph tag</li>
                                    </ul>
                                </li>
                                <li class="show-submenu-two">
                                    <span class="tutorial topic">HTML formatting tags</span> 
                                    <ul class="sub-menu two">
                                        <li class="tutorial topic">bold text</li>
                                        <li class="tutorial topic">italic</li>
                                        <li class="tutorial topic">Underlined text</li>
                                    </ul>
                                </li>
                                <li class="tutorial topic">comments</li>
                                <li class="tutorial topic">images</li>
                                <li class="tutorial topic">tables</li>
                                <li class="tutorial topic">list</li>
                                <li class="tutorial topic">style sheet</li>
                                <li class="tutorial topic">some additional tags</li>
                            </ul>
                        </nav>
                    </section>

                    <section class="tutorials__container">
                            <div class="video__container">
                                <video controls>
                                    <source src="video/video-2.mp4" type="video/mp4">
                                    <track src="video/subtitle-2.vtt" label="English"
                                        kind="captions" srclang="en-us" default> 
                                </video>
                            </div>
                            <div class="written__tutorial">
                                <p class="lecture__topic">WHAT IS HTML?</p>
                                <p class="the__text__field">HTML stands for Hypertext Markup Language, and it is the most widely used language to 
                                    write Web Pages.
                                    Hypertext refers to the way in which Web pages (HTML documents) are linked 
                                    together. Thus, the link available on a webpage is called Hypertext.
                                    As its name suggests, HTML is a Markup Language which means you use HTML 
                                    to simply "mark-up" a text document with tags that tell a Web browser how to 
                                    structure it to display.
                                    Originally, HTML was developed with the intent of defining the structure of documents like 
                                    headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information 
                                    between researchers.
                                    Now, HTML is being widely used to format web pages with the help of different tags 
                                    available in HTML language.
                                    </p>
                            </div>
                            <div class="table-tutorial">
                                <p>Advantages of learning HTML</p>
                                <table>
                                    <tr>
                                        <td>Create Web site</td>
                                        <td>You can create a website or customize an existing web template if you know HTML well.</td>
                                    </tr>
                                    <tr>
                                        <td>Become a web designer</td>
                                        <td>If you want to start a carrer as a professional web designer, HTML and CSS designing is a must skill.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Understand web
                                        </td>
                                        <td>
                                            If you want to optimize your website, to boost its speed and performance, it is good to know HTML to yield best results.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Learn other languages </td>
                                        <td>Once you understands the basic of HTML then other related technologies like javascript, php, or angular are become easier to understand.</td>
                                    </tr>
                                </table>
                            </div>
                    </section>`,
        whatIsHtml:`<div class="video__container">
                        <video controls>
                            <source src="video/video-2.mp4" type="video/mp4">
                            <track src="video/subtitle-2.vtt" label="English"
                                kind="captions" srclang="en-us" default> 
                        </video>
                    </div>
                    <div class="written__tutorial">
                        <p class="lecture__topic">WHAT IS HTML?</p>
                        <p class="the__text__field">HTML stands for Hypertext Markup Language, and it is the most widely used language to 
                            write Web Pages.
                            Hypertext refers to the way in which Web pages (HTML documents) are linked 
                            together. Thus, the link available on a webpage is called Hypertext.
                            As its name suggests, HTML is a Markup Language which means you use HTML 
                            to simply "mark-up" a text document with tags that tell a Web browser how to 
                            structure it to display.
                            Originally, HTML was developed with the intent of defining the structure of documents like 
                            headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information 
                            between researchers.
                            Now, HTML is being widely used to format web pages with the help of different tags 
                            available in HTML language.
                            </p>
                    </div>
                    <div class="table-tutorial">
                        <p>Advantages of learning HTML</p>
                        <table>
                            <tr>
                                <td>Create Web site</td>
                                <td>You can create a website or customize an existing web template if you know HTML well.</td>
                            </tr>
                            <tr>
                                <td>Become a web designer</td>
                                <td>If you want to start a carrer as a professional web designer, HTML and CSS designing is a must skill.</td>
                            </tr>
                            <tr>
                                <td>
                                    Understand web
                                </td>
                                <td>
                                    If you want to optimize your website, to boost its speed and performance, it is good to know HTML to yield best results.
                                </td>
                            </tr>
                            <tr>
                                <td>Learn other languages </td>
                                <td>Once you understands the basic of HTML then other related technologies like javascript, php, or angular are become easier to understand.</td>
                            </tr>
                        </table>
                    </div>`,
        tagElement:`<div class="written__tutorial">
                        <p class="lecture__topic">HTML Tags and HTML elements</p>
                        <p class="the__text__field">
                            <h3>HTML Tags:</h3> Tags are the starting and ending parts of an HTML element. They begin with < symbol and end with > symbol. Whatever written inside < and > are called tags.
                            <h3>HTML elements:</h3> Elements enclose the contents in between the tags. They consist of some kind of structure or expression. It generally consists of a start tag, content and an end tag.
                        </p>
                    </div>
                    <div class="table-tutorial">
                        <p>More about HTML Tag and HTML Elements</p>
                        <table>
                            <tr>
                                <td>HTML tags are used to hold the HTML element.</td>
                                <td>HTML element holds the content.</td>
                            </tr>
                            <tr>
                                <td>HTML tags are almost like keywords where every single tag has unique meaning.	</td>
                                <td>HTML elements specifies the general content.</td>
                            </tr>
                        </table>
                    </div>`,
        metaTags:`
                <div class="written__tutorial">
                    <p class="lecture__topic">Meta tags</p>
                    <p class="the__text__field">HTML lets you specify metadata - additional important information about a document in a 
                        variety of ways. The META elements can be used to include name/value pairs describing 
                        properties of the HTML document, such as author, expiry date, a list of keywords, 
                        document author etc.
                        The <meta> tag is used to provide such additional information. This tag is an empty 
                        element and so does not have a closing tag but it carries information within its attributes.
                        You can include one or more meta tags in your document based on what information you 
                        want to keep in your document but in general, meta tags do not impact physical 
                        appearance of the document so from appearance point of view, it does not matter if you 
                        include them or not.
                        </p>
                </div>
                <div class="table-tutorial">
                    <p>Adding Meta Tags to Your Documents</p>
                    <table>
                        <tr>
                            <td>Attribute</td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Name for the property. Can be anything. Examples include, keywords, description, author, revised, generator etc.</td>
                        </tr>
                        <tr>
                            <td>
                                content
                            </td>
                            <td>
                                Specifies the property's value
                            </td>
                        </tr>
                        <tr>
                            <td>scheme  </td>
                            <td>Specifies a scheme to interpret the property's value (as declared in the 
                                content attribute).</td>
                        </tr>
                    </table>
                </div>
        `,
        headings: `<div class="written__tutorial">
                    <p class="lecture__topic">HTML Heading</p>
                    <p class="the__text__field">HTML Heading
                        A HTML heading or HTML h tag can be defined as a title or a subtitle which you want to display on the webpage. When you place the text within the heading tags &lt;h1>..&lt;/h1>, it is displayed on the browser in the bold format and size of the text depends on the number of heading.
                        
                        There are six different HTML headings which are defined with the &lt;h1> to &lt;h6> tags, from highest level h1 (main heading) to the least level h6 (least important heading).
                        
                        h1 is the largest heading tag and h6 is the smallest one. So h1 is used for most important heading and h6 is used for least important
                        </p>
                
                        &lt;h1>Heading no. 1 &lt;/h1></br>   
                        &lt;h2>Heading no. 2 &lt;/h2></br>       
                        &lt;h3>Heading no. 3 &lt;/h3></br>       
                        &lt;h4>Heading no. 4 &lt;/h4></br>      
                        &lt;h5>Heading no. 5 &lt;/h5></br>      
                        &lt;h6>Heading no. 6 &lt;/h6></br>    
                        
                        <h1>Heading no. 1</h1>
                        <h2>Heading no. 2</h2>
                        <h3>Heading no. 3</h3>
                        <h4>Heading no. 4</h4>
                        <h5>Heading no. 5</h5>
                        <h6>Heading no. 6</h6>
                </div>`,

    },
    css : {
        mainCSSPage : `
                <section id="sideBar__container">
                <nav class="sideBar">
                    <ul>
                        <li id="top"  class="tutorial topic css">What is CSS?</li>
                        <li class="tutorial topic css">How to add css</li>
                        <li class="tutorial topic css">css border style</li>
                        <li class="tutorial topic css">images and videos</li>
                        <li class="tutorial topic css">width and height</li>
                        <li class="tutorial topic css">font style, width and color</li>
                        <li class="tutorial topic css">positioning</li>
                        <li class="tutorial topic css">display: flex</li>
                        <li class="tutorial topic css">display: grid</li>
                        <li class="tutorial topic css">responsiveness</li>
                    </ul>
                </nav>
            </section>
            
            <section id="tutorials__container">
                <div class="written__tutorial">
                    <p class="lecture__topic">What is CSS?</p>
                    <p class="the__text__field">
                        CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces. It can also be used with any kind of XML documents including plain XML, SVG and XUL.
                        CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications.
                        A CSS rule set contains a selector and a declaration block.<br/>
                        <h3>Selector:</h3> Selector indicates the HTML element you want to style. It could be any tag.
                        <h3>Declaration Block:</h3>The declaration block can contain one or more declarations separated by a semicolon. For the above example, there are two declarations:
                        <h3>Property:</h3> A Property is a type of attribute of HTML element. It could be color, border etc.
                        <h3>Value: </h3>Values are assigned to CSS properties. In the above example, value "yellow" is assigned to color property.
                    </p>
                </div>
            </section>
        `,
        whatIsCSS:`
                <div class="written__tutorial">
                    <p class="lecture__topic">What is CSS?</p>
                    <p class="the__text__field">
                        CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces. It can also be used with any kind of XML documents including plain XML, SVG and XUL.
                        CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications.
                        A CSS rule set contains a selector and a declaration block.<br/>
                        <h3>Selector:</h3> Selector indicates the HTML element you want to style. It could be any tag.
                        <h3>Declaration Block:</h3>The declaration block can contain one or more declarations separated by a semicolon. For the above example, there are two declarations:
                        <h3>Property:</h3> A Property is a type of attribute of HTML element. It could be color, border etc.
                        <h3>Value: </h3>Values are assigned to CSS properties. In the above example, value "yellow" is assigned to color property.
                    </p>
            </div>
                `,
        addCss:`
            <div class="written__tutorial">
                <p class="lecture__topic">How to add CSS?</p>
                <p class="the__text__field">
                    CSS is added to HTML pages to format the document according to information in the style sheet. There are three ways to insert CSS in HTML documents.
                    1. Inline CSS<br/>
                    2. Internal CSS<br/>
                    3. External CSS<br/>

                    <h2>1) Inline CSS</h2>
                    <p>
                        Inline CSS is used to apply CSS on a single line or element.
                        &lt;p style="color:blue">Hello CSS&lt;/p>  
                    </p>

                    <h2>2) Internal CSS</h2>
                    <p>Internal CSS is used to apply CSS on a single document or page. It can affect all the elements of the page. It is written inside the style tag within head section of html.
                        For example:
                        &lt;style>  
                        p{color:blue}  
                        &lt;/style> 
                    </p>

                    <h2>3) External CSS</h2>
                    <p>
                        External CSS is used to apply CSS on multiple pages or all pages. Here, we write all the CSS code in a css file. Its extension must be .css for example style.css.
                        For example:
                        p{color:blue}  
                        You need to link this style.css file to your html pages like this:
                        &lt;link rel="stylesheet" type="text/css" href="style.css">   
                    </p>
                </p>
            </div>
        `,
        border:`<div class="written__tutorial">
                    <p class="lecture__topic">CSS border style</p>
                    <p class="the__text__field">
                        The CSS border is a shorthand property used to set the border on an element.
                        The CSS border properties are use to specify the style, color and size of the border of an element. The CSS border properties are given below
                        border-style<br/>
                        border-color<br/>
                        border-width<br/>
                        border-radius<br/>
                        <h3>The Border style property </h3> is used to specify the border type which you want to display on the web page.
                        There are some border style values which are used with border-style property to define a border.
                    </p>
                </div>
                <div class="table-tutorial">
                    <table>
                        <tr>
                            <td>Value</td>
                            <td>Description</td>
                        </tr> 	
                        <tr>
                            <td>none</td>
                            <td>It doesn't define any border.</td>
                        </tr> 	
                        <tr>
                            <td>dotted</td>
                            <td>It is used to define a dotted border.</td>
                        </tr>
                        <tr>
                            <td>dashed</td>
                            <td>It is used to define a dashed border.</td>
                        </tr>
                        <tr>
                            <td>solid</td>
                            <td>It is used to define a solid border.</td>
                        </tr>
                        <tr>
                            <td>double</td>
                            <td>It defines two borders wIth the same border-width value.</td>
                        </tr>
                        <tr>
                            <td>groove</td>
                            <td>It defines a 3d grooved border. effect is generated according to border-color value.</td>
                        </tr> 
                        <tr>
                            <td>ridge</td>
                            <td>It defines a 3d ridged border. effect is generated according to border-color value.</td>
                        </tr> 	
                        <tr>
                            <td>inset</td>
                            <td>It defines a 3d inset border. effect is generated according to border-color value.</td>
                        </tr> 	
                        <tr>
                            <td>outset</td>
                            <td>It defines a 3d outset border. effect is generated according to border-color value.</td>
                        </tr>
                    </table>
                </div>`

    },
    js : {
        mainJS : `
            <section id="sideBar__container">
                <nav class="sideBar">
                    <ul>
                        <li id="top"  class="tutorial topic js">What is JavaScript?</li>
                        <li class="tutorial topic js">Insert Js</li>
                        <li class="tutorial topic js">JS variable and comment</li>
                        <li class="tutorial topic js">if statement</li>
                        <li class="tutorial topic js">loop</li>
                        <li class="tutorial topic js">array</li>
                        <li class="tutorial topic js">data type</li>
                        <li class="tutorial topic js">DOM</li>
                        <li class="tutorial topic js">js Events</li>
                        <li class="tutorial topic js">js OOP</li>
                    </ul>
                </nav>
            </section>
    
            <section id="tutorials__container">
                <div class="written__tutorial">
                    <p class="lecture__topic">What is JavaScript?</p>
                    <p class="the__text__field">
                        JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser. Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications to interact directly without reloading the page every time. The traditional website uses js to provide several forms of interactivity and simplicity.
                        Although, JavaScript has no connectivity with Java programming language. The name was suggested and provided in the times when Java was gaining popularity in the market. In addition to web browsers, databases such as CouchDB and MongoDB uses JavaScript as their scripting and query language.
                        <h2>Features of JavaScript</h2>
                        There are following features of JavaScript:<br/>
                        <ul>
                            <li>
                                All popular web browsers support JavaScript as they provide built-in execution environments.
                            </li>
                            <li>
                                JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.
                            </li>
                            <li>
                                JavaScript is a weakly typed language, where certain types are implicitly cast (depending on the operation).
                            </li>
                            <li>
                                JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.
                            </li>
                            <li>
                                It is a light-weighted and interpreted language.
                            </li>
                            <li>
                                It is a case-sensitive language.
                            </li>
                            <li>
                                JavaScript is supportable in several operating systems including, Windows, macOS, etc.
                            </li>
                            <li>
                                It provides good control to the users over the web browsers.
                            </li>
                        </ul>
                        
                                
                    </p>
                </div>
            </section>
        `,
        whatIsJS:`
                <div class="written__tutorial">
                    <p class="lecture__topic">What is JavaScript?</p>
                    <p class="the__text__field">
                        JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser. Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications to interact directly without reloading the page every time. The traditional website uses js to provide several forms of interactivity and simplicity.
                        Although, JavaScript has no connectivity with Java programming language. The name was suggested and provided in the times when Java was gaining popularity in the market. In addition to web browsers, databases such as CouchDB and MongoDB uses JavaScript as their scripting and query language.
                        <h2>Features of JavaScript</h2>
                        There are following features of JavaScript:<br/>
                        <ul>
                            <li>
                                All popular web browsers support JavaScript as they provide built-in execution environments.
                            </li>
                            <li>
                                JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.
                            </li>
                            <li>
                                JavaScript is a weakly typed language, where certain types are implicitly cast (depending on the operation).
                            </li>
                            <li>
                                JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.
                            </li>
                            <li>
                                It is a light-weighted and interpreted language.
                            </li>
                            <li>
                                It is a case-sensitive language.
                            </li>
                            <li>
                                JavaScript is supportable in several operating systems including, Windows, macOS, etc.
                            </li>
                            <li>
                                It provides good control to the users over the web browsers.
                            </li>
                        </ul>        
                    </p>
            </div>
        `,
        insertJS:`       
            <div class="written__tutorial">
                <p class="lecture__topic">Insert JS</p>
                <p class="the__text__field">    
                    <h3>3 Places to put JavaScript code</h3>
                    1. Between the body tag of html <br/>
                    2. Between the head tag of html  <br/>
                    3. In .js file (external javaScript)  <br/>

                    <h2>1) JavaScript Example : code between the body tag</h2>
                    <p>
                        In the above example, we have displayed the dynamic content using JavaScript. Let’s see the simple example of JavaScript that displays alert dialog box. 
                        &lt;script type="text/javascript">  
                            alert("Hello Javatpoint");  
                            &lt;/script> 
                    </p>
                    <h2>2) JavaScript Example : code between the head tag</h2>
                    <p>
                        Let us see the same example of displaying alert dialog box of JavaScript that is contained inside the head tag.
                        In this example, we are creating a function msg(). To create function in JavaScript, you need to write function with function_name as given below.
                        To call function, you need to work on event. Here we are using onclick event to call msg() function. 
                        &lt;html>  <br/>
                        &lt;head>  <br/>
                        &lt;script type="text/javascript"> <br/> 
                        function msg(){  <br/>
                        alert("Hello World"); <br/> 
                        }  <br/>
                        &lt;/script>  <br/>
                        &lt;/head>  <br/>
                        &lt;body>  <br/>
                        &lt;p>Welcome to JavaScript</p>  <br/>
                        &lt;form>  <br/>
                        &lt;input type="button" value="click" onclick="msg()"/> <br/> 
                        &lt;/form>  <br/>
                        &lt;/body>  <br/>
                        &lt;/html> <br/>
                    </p>

                    <h2>3) External JavaScript file</h2>
                    <p>
                        We can create external JavaScript file and embed it in many html page.
                        It provides code re usability because single JavaScript file can be used in several html pages.
                        An external JavaScript file must be saved by .js extension. It is recommended to embed all JavaScript files into a single file. It increases the speed of the webpage.

                        <h3>index.html</h3>
                        &lt;html>   <br/>
                        &lt;head>   <br/>
                        &lt;script type="text/javascript" src="message.js">&lt;/script>   <br/>
                        &lt;/head>   <br/>
                        &lt;body>   <br/>
                        &lt;p>Welcome to JavaScript&lt;/p>  <br/> 
                        &lt;form>   <br/>
                        &lt;input type="button" value="click" onclick="msg()"/>   <br/>
                        &lt;/form>   <br/>
                        &lt;/body>   <br/>
                        &lt;/html>  <br/>
                        &lt;/p> <br/>

                        <h3>message.js</h3>
                            function msg(){ <br/> 
                            alert("Hello World");  <br/> 
                            } <br/> 
                </p>
            </div>
        `
    }
}

export default data
