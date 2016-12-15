<?php

/**
 * @file
 * Definition of \Drupal\ckeditor_widgets\Plugin\CKEditorPlugin\AnchorLink.
 */
namespace Drupal\ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "widget_quotebox" plugin.
 *
 * @CKEditorPlugin(
 *   id = "widget_quotebox",
 *   label = @Translation("CKEditor Quotebox Widget"),
 *   module = "ckeditor_widgets"
 * )
 */
class WidgetQuoteBox extends CKEditorPluginBase {

    /**
     * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
     */
    function getFile() {
        return drupal_get_path('module', 'ckeditor_widgets') . '/js/plugins/widget_quotebox/plugin.js';
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
            'widget_quotebox' => array(
                'image' => drupal_get_path('module', 'ckeditor_widgets') . '/js/plugins/widget_quotebox/icon.png',
                'label' => $this->t('Quote box'),
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
