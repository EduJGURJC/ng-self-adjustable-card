# Ng Self-Adjustable Card
An angular material card that automatically adjusts to the height of the parent

## How to install?
1. Include the ng-self-adjustable-card dependency into your angular package.json file.
`"ng-self-adjustable-card": "[version]"`
2. Then run npm install
3. Import "SelfAdjustableCardComponent" in your NgModule

## How to use?
You can insert the component in your HTML with the following syntax:
```html
    <self-adjustable-card>
     <sa-card-title>This is a Card Title/Header</sa-card-title>
     <sa-card-content>This is a Card content</sa-card-content>
    </self-adjustable-card>
```
	
Furthermore, you can pass 2 pairs of parameters to the card:
* **titleAlignHorizontal** and **titleAlignVertical**: with these you can set the alignment of the title.
* **contentAlignHorizontal** and **contentAlignVertical**: with these you can set the alignment of the content
The values are the same as those of [angular material layout alignment](https://github.com/angular/flex-layout/wiki/fxLayoutAlign-API)

Example:
```html
    <self-adjustable-card [titleAlignHorizontal]="center" [titleAlignVertical]="center">
     <sa-card-title>This is a Card Title/Header</sa-card-title>
     <sa-card-content>
        <p>This is a paragraph into card content</p>
        <div>This is a div into card content</div>
     </sa-card-content>
    </self-adjustable-card>
```
