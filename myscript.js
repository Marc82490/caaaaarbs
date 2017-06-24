walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCAL\b/g, "CGY");
	v = v.replace(/\bCLB\b/g, "CBJ");
	v = v.replace(/\bMON\b/g, "MTL");
	v = v.replace(/\bWIN\b/g, "WPG");
	v = v.replace(/\bLVK\b/g, "VGK");
	v = v.replace(/\bVEG\b/g, "VGK");


	textNode.nodeValue = v;
}