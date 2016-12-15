<?php

/**
 * @file
 * Definition of \Drupal\ckeditor_widgets\Plugin\CKEditorPlugin\AnchorLink.
 */
namespace Drupal\ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "widget_menu" plugin.
 *
 * @CKEditorPlugin(
 *   id = "widget_menu",
 *   label = @Translation("CKEditor Widget Menu Group"),
 *   module = "ckeditor_widgets"
 * )
 */
class WidgetMenu extends CKEditorPluginBase {

    /**
     * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
     */
    function getFile() {
        return drupal_get_path('module', 'ckeditor_widgets') . '/js/plugins/widget_menu/plugin.js';
    }

    /**
     * {@inheritdoc}
     */
    public function getDependencies(Editor $editor) {
        return array();
    }
    /**
     * {@inheritdoc}
     */
    public function getLibraries(Editor $editor) {
        return array();
    }

    /**
     * {@inheritdoc}
     */
    public function isInternal() {
        return FALSE;
    }

    /**
     * Implements \Drupal\ckeditor\Plugin\CKEditorPluginButtonsInterface::getButtons().
     */
    function getButtons() {
        return array(
            'widget_menu' => array(
                'image' => drupal_get_path('module', 'ckeditor_widgets') . '/js/plugins/widget_menu/icon.png',
                'label' => $this->t('Widget Menu'),
            ),
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getConfig(Editor $editor) {
        return array();
    }
}
