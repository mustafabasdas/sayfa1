gdjs.Giris_451Code = {};
gdjs.Giris_451Code.GDNewPanelSpriteObjects1= [];
gdjs.Giris_451Code.GDNewPanelSpriteObjects2= [];
gdjs.Giris_451Code.GDCopyrightObjects1= [];
gdjs.Giris_451Code.GDCopyrightObjects2= [];
gdjs.Giris_451Code.GDbasla_95buttonObjects1= [];
gdjs.Giris_451Code.GDbasla_95buttonObjects2= [];
gdjs.Giris_451Code.GDNewPanelSprite5Objects1= [];
gdjs.Giris_451Code.GDNewPanelSprite5Objects2= [];
gdjs.Giris_451Code.GDlogoObjects1= [];
gdjs.Giris_451Code.GDlogoObjects2= [];
gdjs.Giris_451Code.GDATLASTEXTObjects1= [];
gdjs.Giris_451Code.GDATLASTEXTObjects2= [];
gdjs.Giris_451Code.GDoutObjects1= [];
gdjs.Giris_451Code.GDoutObjects2= [];


gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDbasla_9595buttonObjects1Objects = Hashtable.newFrom({"basla_button": gdjs.Giris_451Code.GDbasla_95buttonObjects1});
gdjs.Giris_451Code.userFunc0x7737f0 = function(runtimeScene, objects) {
"use strict";
window.open("https://www.kinetekor.com/konular","_self")
};
gdjs.Giris_451Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Giris_451Code.GDbasla_95buttonObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.Giris_451Code.GDbasla_95buttonObjects1);
gdjs.Giris_451Code.userFunc0x7737f0(runtimeScene, objects);

}


};gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDNewPanelSprite5Objects1Objects = Hashtable.newFrom({"NewPanelSprite5": gdjs.Giris_451Code.GDNewPanelSprite5Objects1});
gdjs.Giris_451Code.userFunc0x71b388 = function(runtimeScene, objects) {
"use strict";
window.open("https://www.kinetekor.com/info","_self")
};
gdjs.Giris_451Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("basla_button"), gdjs.Giris_451Code.GDbasla_95buttonObjects1);

var objects = [];
objects.push.apply(objects,gdjs.Giris_451Code.GDbasla_95buttonObjects1);
gdjs.Giris_451Code.userFunc0x71b388(runtimeScene, objects);

}


};gdjs.Giris_451Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("basla_button"), gdjs.Giris_451Code.GDbasla_95buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDbasla_9595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Giris_451Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.Giris_451Code.GDNewPanelSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDNewPanelSprite5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Giris_451Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Giris_451Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Giris_451Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Giris_451Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Giris_451Code.GDCopyrightObjects1.length = 0;
gdjs.Giris_451Code.GDCopyrightObjects2.length = 0;
gdjs.Giris_451Code.GDbasla_95buttonObjects1.length = 0;
gdjs.Giris_451Code.GDbasla_95buttonObjects2.length = 0;
gdjs.Giris_451Code.GDNewPanelSprite5Objects1.length = 0;
gdjs.Giris_451Code.GDNewPanelSprite5Objects2.length = 0;
gdjs.Giris_451Code.GDlogoObjects1.length = 0;
gdjs.Giris_451Code.GDlogoObjects2.length = 0;
gdjs.Giris_451Code.GDATLASTEXTObjects1.length = 0;
gdjs.Giris_451Code.GDATLASTEXTObjects2.length = 0;
gdjs.Giris_451Code.GDoutObjects1.length = 0;
gdjs.Giris_451Code.GDoutObjects2.length = 0;

gdjs.Giris_451Code.eventsList2(runtimeScene);

return;

}

gdjs['Giris_451Code'] = gdjs.Giris_451Code;
