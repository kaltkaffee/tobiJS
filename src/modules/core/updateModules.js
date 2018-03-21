import Renderable from "../renderables/renderable";


export default function UpdateModules(modulesManager, game)
{
    let size = modulesManager._pendingModules.size;

    if (size > 0)
    {
        // add pending modules
        modulesManager._pendingModules.each(mod => {

            mod.init(modulesManager.entity, game);

            modulesManager.attached.set(mod.type, mod);

            // RENDERABLES
            if (mod instanceof Renderable)
            {
                game.system.render.layer.renderLayers.at(0).add(mod);
            }
        });

        modulesManager._pendingModules.clear();
    }
}
